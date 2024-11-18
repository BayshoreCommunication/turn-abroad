import React from "react";
import Motion from "../motion/Motion";

const PrivacyPolicy = () => {
  return (
    <section className="py-10 lg:py-16">
      <Motion effect="fade-up" duration="2000">
        <div className="container mx-auto ">
          <div className="text-center mb-4 md:mb-8">
            <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  ">
              Privacy Policy for TurnAbroad
            </h1>
            <p className="text-lg md:text-xl">
              <strong>Effective Date:</strong> 18th November, 2024
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                1. Introduction
              </h4>
              <p className="text-base md:text-lg">
                Welcome to TurnAbroad. Your privacy is of utmost importance to
                us. This Privacy Policy outlines how we collect, use, disclose,
                and protect your personal information when you interact with our
                website and services. TurnAbroad complies with applicable
                privacy laws, including the Florida Information Protection Act
                (FIPA), to ensure your data is handled securely.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                2. Information We Collect
              </h4>
              <p className="text-base md:text-lg mb-2">
                We may collect and store the following types of information:
              </p>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  <strong>Personal Information:</strong> Includes your name,
                  email address, phone number, and any other information you
                  provide when contacting us or scheduling a consultation.
                </li>
                <li className="text-base md:text-lg">
                  <strong> Technical Information:</strong> Information
                  automatically collected when you use our website, such as IP
                  addresses, browser type, device type, and browsing behavior.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                3. How We Use Your Information
              </h4>
              <p className="text-base md:text-lg mb-2">
                We use the information collected to:
              </p>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  Contact you to schedule or confirm meetings.
                </li>
                <li className="text-base md:text-lg">
                  Respond to your inquiries and provide consulting services.
                </li>
                <li className="text-base md:text-lg">
                  Improve our website and customer experience.
                </li>
                <li className="text-base md:text-lg">
                  Comply with legal obligations and enforce our terms of
                  service.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                4. Sharing Your Information
              </h4>
              <p className="text-base md:text-lg mb-2">
                We do not sell, rent, or trade your personal information. We may
                share your information in the following scenarios:
              </p>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  <strong>Legal Compliance:</strong> When required by law or to
                  protect the rights, property, or safety of TurnAbroad, our
                  users, or others.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                5. Data Retention
              </h4>
              <p className="text-base md:text-lg mb-2">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including legal and accounting requirements.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                6. Data Security
              </h4>
              <p className="text-base md:text-lg mb-2">
                TurnAbroad implements industry-standard security measures to
                protect your information from unauthorized access, alteration,
                or disclosure. However, no system is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                7. Your Rights
              </h4>
              <p className="text-base md:text-lg mb-2">
                As a Florida resident, you have the right to:
              </p>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  Access, correct, or delete your personal information.
                </li>
                <li className="text-base md:text-lg">
                  Opt out of certain data processing activities.
                </li>
                <li className="text-base md:text-lg">
                  Request information about how your data is collected and used.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                8. Cookies and Tracking Technologies
              </h4>
              <p className="text-base md:text-lg">
                Our website may use cookies and similar tracking technologies to
                improve your browsing experience. You can control or disable
                cookies through your browser settings.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                {`9. Children's Privacy`}
              </h4>
              <p className="text-base md:text-lg">
                Our website is not directed at individuals under the age of 18.
                We do not knowingly collect personal information from children.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                10. Updates to This Privacy Policy
              </h4>
              <p className="text-base md:text-lg">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated effective date.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                11. Contact Us
              </h4>
              <p className="text-base md:text-lg">
                If you have any questions or concerns regarding this Privacy
                Policy, please contact us:{" "}
                <strong>Email: turnabroad@gmail.com</strong>
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg">
                TurnAbroad is committed to protecting your privacy and ensuring
                transparency in how your information is handled.
              </p>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default PrivacyPolicy;
