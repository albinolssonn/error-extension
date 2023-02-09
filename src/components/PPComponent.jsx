import React from "react";

const PPComponent = ({ setContentToggle }) => {
  return (
    <div className="paragraph-section">
      <div className="paragraph-container">
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy outlines the data protection practices of [Website
          Name], which operates the [Website URL].
        </p>
        <h4>Information Collection and Use</h4>
        <p>
          When you create an account with us, we collect your email address for
          the purpose of login and identification. This information is necessary
          for us to provide you with access to the website and its features. We
          do not collect any additional personal data other than your email
          address. We do not share, sell, or otherwise disseminate this
          information to any third party.
        </p>
        <h4>Data Retention</h4>
        <p>
          We will retain your personal data for as long as your account is
          active or as needed to provide you with access to our website. If you
          choose to delete your account, we will securely delete your personal
          data.
        </p>
        <h4>Data Security</h4>
        <p>
          We have implemented appropriate technical and organizational measures
          to ensure that your personal data is secure and protected against
          unauthorized access, modification, or loss.
        </p>
        <h4>Changes to this Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to our data protection practices. We will notify you of any changes by
          posting the updated policy on our website.
        </p>
        <h4>Contact Us</h4>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          by email at [Email Address].
        </p>
        <p>This Privacy Policy was last updated on 2023-02-01.</p>
      </div>

      <div className="footer">
        <div
          id="main-btn"
          onClick={() => setContentToggle(1)}
        >
          <p>Back to menu</p>
        </div>
      </div>
    </div>
  );
};

export default PPComponent;
