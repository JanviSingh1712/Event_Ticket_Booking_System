import React, { useState } from "react";

const styles = {
  container: {
    backgroundColor: "white",
    color: "black",
    fontFamily: "Poppins, sans-serif",
    padding: "50px 12px",
  },
  row: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "50px 0",
  },
  textCol: {
    flexBasis: "50%",
    marginBottom: "20px",
  },
  imgCol: {
    flexBasis: "50%",
    marginBottom: "20px",
    textAlign: "center",
  },
  img: {
    display: "block",
    width: "90%",
    margin: "auto",
  },
  faq: {
    padding: "10px 12%",
    textAlign: "center",
    fontSize: "18px",
  },
  faqHeader: {
    fontWeight: "500",
    fontSize: "40px",
  },
  accordion: {
    margin: "60px auto",
    width: "100%",
    maxWidth: "750px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    fontSize: "18px",
    fontWeight: "500",
    background: "#f0f0f0",
    marginBottom: "2px",
    cursor: "pointer",
  },
  content: {
    background: "#f0f0f0",
    textAlign: "left",
    padding: "0 20px",
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.5s ease-in-out, padding 0.5s ease-in-out",
  },
  contentOpen: {
    maxHeight: "600px",
    padding: "30px 20px",
  },
};

const features = [
  {
    title: "Live Concerts",
    description:
      "Experience the best live concerts from top artists around the world.",
    imgSrc: "/images/photo-1511578314322-379afb476865.jpg",
  },
  {
    title: "Sports Events",
    description: "Get front-row access to the most thrilling sports events.",
    imgSrc: "/images/photo-1511578314322-379afb476865.jpg",
  },
  {
    title: "Food Festivals",
    description:
      "Indulge in the most delicious food festivals happening near you.",
    imgSrc: "/images/photo-1511578314322-379afb476865.jpg",
  },
  {
    title: "Tech Conferences",
    description:
      "Stay updated with the latest technology trends and innovations.",
    imgSrc: "/images/photo-1511578314322-379afb476865.jpg",
  },
];

const faqs = [
  {
    question: "How can I buy tickets?",
    answer:
      "You can purchase tickets directly from our website or through our app.",
  },
  {
    question: "Are refunds available?",
    answer:
      "Refund policies vary by event. Please check the event details for more information.",
  },
  {
    question: "Can I transfer my ticket?",
    answer:
      "Yes, you can transfer tickets to friends or family using our ticket transfer feature.",
  },
  {
    question: "What should I bring to an event?",
    answer:
      "Make sure to bring your ticket (digital or printed) and a valid ID.",
  },
];

const FeatureCard = ({ title, description, imgSrc, isReversed }) => (
  <div
    style={{ ...styles.row, flexDirection: isReversed ? "row-reverse" : "row" }}
  >
    <div style={styles.textCol}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div style={styles.imgCol}>
      <img src={imgSrc} alt={title} style={styles.img} />
    </div>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <li>
    <div onClick={onClick} style={styles.label}>
      {question}
      <span>{isOpen ? "−" : "+"}</span>
    </div>
    <div style={{ ...styles.content, ...(isOpen ? styles.contentOpen : {}) }}>
      <p>{answer}</p>
    </div>
  </li>
);

const Cards = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <div>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imgSrc={feature.imgSrc}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
      <div style={styles.faq}>
        <h2 style={styles.faqHeader}>Frequently Asked Questions</h2>
        <ul style={styles.accordion}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
