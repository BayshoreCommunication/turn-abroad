import { details } from "framer-motion/client";

export const studentData = {
  question: "Did you complete school?",
  yes: {
    question: "Did you complete uni?",
    yes: {
      question: "Masters/post grad",
      compare: "",
    },
    no: {
      question: "Undergrad",
      compare: "",
    },
  },
  no: {
    question: "INTO program / community college",
    result: "Your chances of TurningAbroad with Turnabroad is 100%",
  },
};

export const workData = {
  question: "Did you complete school?",
  yes: {
    question: "Did you complete uni?",
    yes: {
      question: "Did you do masters/post grad?",
      yes: {
        question: "Are you working in the US right now?",
        yes: {
          question: "Is your employer willing to sponsor you?",
          yes: {
            path: "EB3 skilled / H1B",
            chances: "Your chances of Turning Abroad with Turnabroad is 75%",
            cost: "Total cost: ~$7,000 - $8,000",
          },
          no: {
            path: "Alternative Visa Options",
            note: "You may need to explore other visa options or find an employer willing to sponsor.",
          },
        },
        no: {
          path: "EB3 skilled / EB1",
          chances: "Your chances of Turning Abroad with Turnabroad is 68.2%",
          cost: "Total cost: ~$7,000 - $8,000",
        },
      },
      no: {
        question: "Are you working in the US right now?",
        yes: {
          question: "Is your employer willing to sponsor you?",
          yes: {
            path: "EB3 skilled / H1B",
            chances: "Your chances of Turning Abroad with Turnabroad is 75%",
            cost: "Total cost: ~$7,000 - $8,000",
          },
          no: {
            path: "Alternative Visa Options",
            note: "You may need to explore other visa options or find an employer willing to sponsor.",
          },
        },
        no: {
          question: "Do you have a job offer from a US employer?",
          yes: {
            path: "Employment-based Visa Options",
            note: "If your employer is willing to sponsor, consider EB3 or H1B.",
          },
          no: {
            path: "Other Visa Categories",
            note: "Consider options like the Diversity Visa Lottery, family-based immigration, or studying in the US.",
          },
        },
      },
    },
    no: {
      result: "EB3 unskilled",
      details: {
        chance: "Your chances of TurningAbroad is 95%",
        cost: "Total cost: $17,000",
      },
    },
  },
  no: {
    result: "EB3 unskilled",
    details: {
      chance: "Your chances of TurningAbroad is 95%",
      cost: "Total cost: $17,000",
    },
  },
};

export const investmentData = {
  question: "How much can you invest?",
  less: {
    amount: "$60,000 - $500,000",
    doc_needed: "Business Visa",
    nextStep: {
      visa_type: "E2",
      nextStep: {
        question: "What's your home country?",
        eligible: {
          result: "Your chances of Turning Abroad with Turnabroad is 55%",
          details: {
            cost: "$10,000 - $12,000",
            requirement: "Minimum of $60,000 investment required",
          },
        },
        notEligible: {
          result:
            "Your country is not eligible for Business visa. Please contact our consultants for other available options.",
        },
      },
    },
  },
  more: {
    amount: "$500,000 or more",
    doc_needed: "US Passport",
    nextStep: {
      visa_type: "EBS",
      result: "Your chances of Turning Abroad with Turnabroad is 95%",
      details: {
        cost: "$15,000 - $18,000",
        requirement: "Minimum of $500,000 investment required",
      },
    },
  },
};
