import React from "react";
import Motion from "../motion/Motion";
import Link from "next/link";

const HiringPost = () => {
  return (
    <div>
      <section className="py-10 lg:py-14 xl:py-16">
        <Motion effect="fade-up" duration="2000">
          <div className="container">
            <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8">
              Hiring <span className="text-primary">Post</span>
            </h1>
            <div className="p-4 md:p-8 lg:p-12 xl:p-16 bg-[#F3F9FF] rounded-lg ">
              {" "}
              <div>
                <h3 className="text-2xl font-semibold leading-[190%] text-justify mb-4">
                  {`🌍 𝐓𝐮𝐫𝐧𝐀𝐛𝐫𝐨𝐚𝐝 𝐢𝐬 𝐇𝐢𝐫𝐢𝐧𝐠 – 𝐉𝐨𝐢𝐧 𝐎𝐮𝐫 𝐌𝐢𝐬𝐬𝐢𝐨𝐧 𝐭𝐨 𝐔𝐧𝐥𝐨𝐜𝐤 𝐆𝐥𝐨𝐛𝐚𝐥 𝐎𝐩𝐩𝐨𝐫𝐭𝐮𝐧𝐢𝐭𝐢𝐞𝐬! 🌍`}
                </h3>
                <p className="text-lg lg:text-xl font-normal leading-[140%] text-justify mb-4">
                  {/* {' '} */}
                  {`Are you someone who thrives on organization, communication, and keeping things running smoothly behind the scenes? We’re looking for a passionate Operations Coordinator to join our fast-growing team in Dhaka, Bangladesh!`}
                </p>
              </div>
              <div>
                <ul className="text-lg lg:text-xl font-normal leading-[140%] space-y-3">
                  <li>
                    <strong>
                      As an Operations Coordinator at TurnAbroad, you’ll:
                    </strong>
                  </li>
                  <li>
                    ✅ Support daily operations across international education,
                    work permits & business services
                  </li>
                  <li>
                    ✅ Coordinate with global partners, clients & institutions
                  </li>
                  <li>
                    ✅ Manage schedules, documents, and operational trackers
                  </li>
                  <li>
                    ✅ Work closely with leadership to improve internal systems
                  </li>
                  <li>✅ Gain hands-on experience in a global consultancy</li>

                  <li>
                    <strong>🔍 What We’re Looking For:</strong>
                  </li>
                  <li>🎓 Bachelor’s degree (completed or final year)</li>
                  <li>
                    💼 0–2 years of experience in admin, operations, or
                    coordination
                  </li>
                  <li>
                    🧠 Strong Excel skills & willingness to learn new tools
                  </li>
                  <li>
                    🌐 Interest in international education or immigration? Huge
                    plus!
                  </li>

                  <li>
                    <strong>💼 Job Type:</strong> Full-time
                  </li>
                  <li>
                    <strong>📍 Location:</strong> Dhaka
                  </li>
                  <li>
                    <strong>📈 Level:</strong> Entry to Mid-Level
                  </li>
                  <li>
                    <strong>💸 Salary:</strong> Competitive Salary + Growth
                    Opportunities
                  </li>
                  <li>
                    <Link
                      href="https://forms.gle/dGoccvvA357vbyhf6"
                      target="_blank"
                    ></Link>
                  </li>
                </ul>
              </div>
              {/* Apply Button */}
              <div className="text-start mt-4 lg:pt-6 ">
                <Link
                  href={"https://forms.gle/dGoccvvA357vbyhf6"}
                  target="_blank"
                  className="btn btn-primary min-w-64"
                >
                  Apply Here
                </Link>
              </div>
            </div>
          </div>
        </Motion>
      </section>
    </div>
  );
};

export default HiringPost;
