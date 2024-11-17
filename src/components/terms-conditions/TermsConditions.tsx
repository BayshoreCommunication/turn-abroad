import React from "react";
import Motion from "../motion/Motion";

const TermsConditions = () => {
  return (
    <section className="py-10 lg:py-16">
      <Motion effect="fade-up" duration="2000">
        <div className="container mx-auto ">
          <div className="text-center mb-4 md:mb-8">
            <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  ">
              Terms and Conditions
            </h1>
            <p className="text-lg md:text-xl">
              <strong>Effective Date:</strong> 18th November, 2024
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <p className="text-base md:text-lg">
              {` Welcome to TurnAbroad! These terms and conditions outline the
              rules and regulations for using TurnAbroad's website. By accessing
              this website, we assume you accept these terms and conditions in
              full. Do not continue to use TurnAbroad's website if you do not
              agree to all the terms and conditions stated on this page.`}
            </p>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                1. Acceptance of Terms
              </h4>
              <p className="text-base md:text-lg">
                By using this website, you agree to be bound by these Terms and
                Conditions, our Privacy Policy, and any other policies posted on
                this site. If you do not agree, you must cease using the site
                immediately.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                2. Eligibility
              </h4>
              <p className="text-base md:text-lg">
                You must be at least 18 years old or have the consent of a
                parent or legal guardian to use our website. By using this
                website, you confirm that you meet this requirement.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                3. Services
              </h4>
              <p className="text-base md:text-lg">
                TurnAbroad provides visa assistance for F1, EB3, E2 and EB5. The
                services are subject to change without notice and may be
                suspended or terminated at any time at our sole discretion.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                4. Use of Website
              </h4>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  You agree to use the website only for lawful purposes.
                </li>
                <li className="text-base md:text-lg">
                  {`You are prohibited from using the site in any way that could
                  harm, disable, or overburden our servers or interfere with any
                  other party's use of the site.`}
                </li>
                <li className="text-base md:text-lg">
                  Unauthorized access to any portion of the website is strictly
                  prohibited.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                5. Intellectual Property
              </h4>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of TurnAbroad or its
                  content suppliers and is protected by U.S. and international
                  copyright laws.
                </li>
                <li className="text-base md:text-lg">
                  You may not reproduce, distribute, or use any content without
                  our prior written consent.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                6. User Information and Scheduling Requests
              </h4>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  TurnAbroad does not require users to create an account to use
                  our website. However, users may voluntarily provide personal
                  information, including their name, email, and preferences, to
                  schedule a meeting with us.
                </li>
                <li className="text-base md:text-lg">
                  You may not reproduce, distribute, or use any content without
                  our prior written consent.
                </li>

                <li className="text-base md:text-lg">
                  The information collected may include:
                  <ul className="list-[circle] ms-7">
                    <li className="text-base md:text-lg">Your name</li>
                    <li className="text-base md:text-lg">Your email address</li>
                    <li className="text-base md:text-lg">
                      Your purpose for going abroad (study, work, or invest)
                    </li>
                    <li className="text-base md:text-lg">
                      Your preferred destination country (USA, UK, or Canada)
                    </li>
                  </ul>
                </li>
                <li className="text-base md:text-lg">
                  TurnAbroad is committed to protecting your privacy. Your
                  information will not be shared, sold, or disclosed to third
                  parties, except as required by law or with your explicit
                  consent.
                </li>
                <li className="text-base md:text-lg">
                  While we strive to keep your information secure, TurnAbroad
                  cannot guarantee the absolute security of the data you submit
                  online.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                7. Limitation of Liability
              </h4>
              <p className="text-base md:text-lg">
                To the fullest extent permitted under Florida law:
              </p>
              <ul className="list-disc ms-7">
                <li className="text-base md:text-lg">
                  TurnAbroad shall not be liable for any direct, indirect,
                  incidental, special, or consequential damages arising out of
                  or in connection with your use of the website or services.
                </li>
                <li className="text-base md:text-lg">
                  TurnAbroad is not responsible for any errors, omissions, or
                  inaccuracies in the content provided.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                8. Indemnification
              </h4>
              <p className="text-base md:text-lg">
                You agree to indemnify and hold harmless TurnAbroad, its
                employees, affiliates, and partners from any claims, damages, or
                expenses (including legal fees) arising from your use of the
                website or breach of these Terms.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                9. Governing Law
              </h4>
              <p className="text-base md:text-lg">
                These Terms and Conditions are governed by the laws of the State
                of Florida. Any disputes arising out of or related to these
                Terms will be resolved in the courts of Hillsborough County,
                Florida.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                10. Changes to Terms
              </h4>
              <p className="text-base md:text-lg">
                TurnAbroad reserves the right to revise these Terms and
                Conditions at any time. Changes will be effective upon posting
                on the website. It is your responsibility to review this page
                periodically.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                11. Termination
              </h4>
              <p className="text-base md:text-lg">
                We reserve the right to terminate or suspend your access to the
                website, without notice, for any reason, including breach of
                these Terms.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl  font-bold mb-3">
                12. Contact Us
              </h4>
              <p className="text-base md:text-lg">
                If you have any questions about these Terms and Conditions,
                please contact us at:{" "}
                <strong>Email: turnabroad@gmail.com</strong>
              </p>
              <p className="text-base md:text-lg mt-4">
                <strong>Acknowledgment</strong>
              </p>
              <p>
                By using this website, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default TermsConditions;
