import React from "react";
import MainBtnComponent from "./MainBtnComponent";

const TOUComponent = ({ setSignStepper }) => {
  return (
    <div className="paragraph-section">
      <div className="paragraph-container">
        <h1>Terms of Use Agreement</h1>

        <p>
          Welcome to [Website Name], an online platform that provides
          [Services/Features]. This Terms of Use Agreement (the “Agreement”)
          sets forth the legally binding terms for your use of our website and
          services.
        </p>

        <p>
          Please read this Agreement carefully before accessing or using our
          website and services. By accessing or using our website and services,
          you agree to be bound by all the terms and conditions of this
          Agreement. If you do not agree to all the terms and conditions of this
          Agreement, you may not access or use our website and services.
        </p>

        <h4>1. Eligibility</h4>
        <p>
          The use of our website and services is limited to individuals who are
          at least [age]. By using our website and services, you represent and
          warrant that you meet this eligibility requirement.
        </p>
        <h4>2. Intellectual Property</h4>

        <p>
          Our website and services, including all content, software, and
          functionality, are owned by [Company Name] or our licensors and are
          protected by United States and international copyright, trademark, and
          other intellectual property laws.
        </p>

        <h4>3. License to Use</h4>

        <p>
          Subject to your compliance with this Agreement, [Company Name] grants
          you a limited, non-exclusive, non-transferable license to access and
          use our website and services for your personal, non-commercial use.
        </p>

        <h4>4. Proprietary Rights</h4>

        <p>
          You acknowledge and agree that our website and services and all
          content, software, and functionality are proprietary and confidential
          information of [Company Name]. You shall not modify, copy, distribute,
          transmit, display, perform, reproduce, publish, license, create
          derivative works from, transfer, or sell any content, software,
          products, or services obtained from our website and services.
        </p>

        <h4>5. User Conduct</h4>

        <p>
          You agree not to engage in any of the following prohibited activities:
          (a) copying, distributing, or disclosing any part of our website and
          services in any medium, including without limitation by any automated
          or non-automated means; (b) using any automated system, including
          without limitation “robots,” “spiders,” “offline readers,” etc., to
          access our website and services in a manner that sends more request
          messages to the [Company Name] servers than a human can reasonably
          produce in the same period of time by using a conventional on-line web
          browser; (c) attempting to interfere with, compromise the system
          integrity or security or decipher any transmissions to or from the
          servers running our website and services; (d) taking any action that
          imposes, or may impose at our sole discretion an unreasonable or
          disproportionately large load on our infrastructure; (e) uploading
          invalid data, viruses, worms, or other software agents through our
          website and services; (f) collecting or harvesting any personally
          identifiable information, including account names, from our website
          and services; (g) using the communication systems provided by our
          website and services for any commercial solicitation purposes; (h)
          impersonating another person or entity or falsely stating or otherwise
          misrepresenting your affiliation with a person or entity; (i)
          interfering with the proper working of our website and services.
        </p>

        <h4>6. Termination</h4>
        <p>
          [Company Name] may terminate this Agreement, or terminate or suspend
          your access to our website and services at any time, with or without
          cause, with or without notice. Upon termination, you will lose access
          to our website and services.
        </p>

        <h4>7. Disclaimer of Warranty</h4>

        <p>
          Our website and services are provided “as is” and “as available”
          without warranty of any kind. [Company Name] and our licensors hereby
          disclaim all warranties, express or implied, including but not limited
          to the implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement
        </p>
      </div>

      <div className="main-footer">
        <MainBtnComponent
          btnAction={() => setSignStepper(1)}
          btnText={"Back to register"}
        />
      </div>
    </div>
  );
};

export default TOUComponent;
