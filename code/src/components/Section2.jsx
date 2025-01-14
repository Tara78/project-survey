import React, { useState } from 'react';

const Section2 = (props) => {
  return (
    <>
      <form>
        <section className="section">
          <h3>Section 2 | Your recently purchased reasons: </h3>
          <p>- What is the main factor for you to purchese our product? </p>
          <select
            value={props.formData.reason}
            onChange={(e) =>
              props.setFormData({ ...props.formData, reason: e.target.value })
            }
          >
            <option value=""> Main Factor is about... </option>
            <option value="design">Design</option>
            <option value="features">Features</option>
            <option value="price">Price</option>
            <option value="other">Other</option>
          </select>
          
          {/* Buttons */}
          <section className="allbtns">
            <button
              type="button"
              className="btn"
              onClick={() => props.onPrevStep()}
            >
              Previous page
            </button>
            <button
              type="Submit"
              className="btn"
              onClick={() => props.onNextStep()}
            >
              Next Page
            </button>
          </section>
        </section>
      </form>
    </>
  );
};

export default Section2;
