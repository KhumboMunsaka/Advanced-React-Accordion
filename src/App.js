// import { useState } from "react/cjs/react.production.min";
import { useState } from "react";

import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((question, index) => (
        <AccordionItem
          title={question.title}
          num={index}
          text={question.text}
          key={question.title}
          currentOpen={currentOpen}
          onSetOpen={setCurrentOpen}
        >
          {question.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title={"Test 1"}
        num={22}
        key={"Test 1"}
        currentOpen={currentOpen}
        onSetOpen={setCurrentOpen}
      >
        <p>Here is love, vast as the ocean, lovingkindness as the flood.</p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, currentOpen, onSetOpen, children }) {
  const isOpen = num === currentOpen;

  function handleToggle() {
    onSetOpen(isOpen ? null : num);
  }
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle()}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
