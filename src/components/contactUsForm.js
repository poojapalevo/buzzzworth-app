"use client";

import {  validate, validatevalue } from "@/helper/validate";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactUs({Title}) {
  const url ='https://devops.evolutionco.in/ecos/buzzzworth_Dev/public/api/contactform'
  const initialData = {
    name: "",
    email: "",
    message: "",
    budget: "",
    interested_in: [],
  };
  const [formData, setFormData] = useState(initialData);
  const [error, setErrors] = useState({})
  const [message, setMessage] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const err= validatevalue(error,name, value);
    setErrors(err)
  };

  const handleInterestToggle = (item) => {
    setFormData((prev) => {
      const alreadySelected = prev.interested_in.includes(item);
      const updated = alreadySelected
        ? prev.interested_in.filter((i) => i !== item)
        : [...prev.interested_in, item];

      return {
        ...prev,
        interested_in: updated,
      };
    });
  };

  const handleBudgetSelect = (budget) => {
    setFormData((prev) => ({
      ...prev,
      budget,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage(null);
    const err = validate(formData);
    if (Object.keys(err).length > 0) {
      setErrors(err)
      return;
    }

    try {
      const response = await axios.post(url, formData);
      if(response){
        console.log(response)
      }

    } catch (error) {
      console.error(error);
      setMessage("Error: " + (error.response?.data?.message || "Something went wrong"));
    }
  };
  

  const interestedOptions = [
    "Video Assets",
    "Social Media",
    "Digital Marketing",
    "ORM",
    "Performance Marketing",
    "Custom",
  ];

  const budgetOptions = [
    "₹1-2 Lakh",
    "₹3-4Lakh",
    "₹4-5Lakh",
    "50k-100k",
    "₹10 Lakh",
  ];

  return (
    <div className="common-form">
      <div className="common-form-left">
        <div className="common-form-heading">
          <h3>
            { Title || <>Got a brief ? <span>Let’s<br />get to work</span></>}
          </h3>
        </div>

        <div className="interestedIn-wrap transform_none">
          <h3 className="interestedIn-title">I'm interested in...</h3>
          <ul className="interestedIn-list">
            {interestedOptions.map((item) => (
              <li
                key={item}
                className={`interestedIn-list-item ${formData.interested_in.includes(item) ? "active" : ""
                  }`}
                onClick={() => handleInterestToggle(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="common-form-right transform_none">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              
            />
            {error&&error.name && <div style={{ color: "red" }}>{error.name}</div>}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              
            />
            {error&&error.email && <div style={{ color: "red" }}>{error.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="your-message" className="form-label">
              Tell Us About Your Project
            </label>
            <textarea
              className="form-control"
              id="your-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              
            />
            {error&&error.message && <div style={{ color: "red" }}>{error.message}</div>}
          </div>
          <div className="form-group">
            <label className="form-label">Project budget</label>
            <ul className="project-budget-list">
              {budgetOptions.map((item) => (
                <li
                  key={item}
                  className={`project-budget-list-item ${formData.budget === item ? "active" : ""
                    }`}
                  onClick={() => handleBudgetSelect(item)}
                >
                  {item}
                </li>
              ))}
            </ul>

            {error&&error.budget && <div style={{ color: "red" }}>{error.budget}</div>}
          </div>
          {message&&<div style={{ color: "red" }}>{message}</div>}
          <div className="form-group">
            <button  className="form-btn solid-btn" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
