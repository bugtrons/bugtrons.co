import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.scss";
export default function FAQ() {
  return (
    <>
      <div className="faq-head">FAQ</div>
      <Accordion className="faq-section" defaultActiveKey="0">
        <Accordion.Item className="faq-individual" eventKey="0">
          <Accordion.Header className="faq-header">
            <b>What is BUGTRONS?</b>
          </Accordion.Header>
          <Accordion.Body>
            BUGTRONS is a <b>student-run contest event</b> with the
            collaboration of tremendous tech-lead communities, where we aim to
            emphasise problem-solving, code efficiency, code optimization, and
            logic-based programming.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="faq-individual" eventKey="1">
          <Accordion.Header className="faq-header">
            <b>When and Where is BUGTRONS?</b>
          </Accordion.Header>
          <Accordion.Body>
            BUGTRONS 2.0 is a 3-days virtual contest on{" "}
            <b>03rd March - 5th March, 2022</b>. The contest will be held via{" "}
            <a href="https://dsc.gg/bugtrons">
              <b>BUGTRONS discord server</b>
            </a>
            .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="faq-individual" eventKey="2">
          <Accordion.Header className="faq-header">
            <b>Who can attend?</b>
          </Accordion.Header>
          <Accordion.Body>
            We are <b>open to all students</b> including undergraduate, graduate
            and high school students with any background are welcome!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="faq-individual" eventKey="3">
          <Accordion.Header className="faq-header">
            <b>Do I need any premiere experience?</b>
          </Accordion.Header>
          <Accordion.Body>
            <b>Yes</b>, as it's limited to 3 days, we encourage you to have a{" "}
            <b>good knowledge of the algorithmic programming language</b> you
            are using. For beginners, we arranged some{" "}
            <b>DSA sessions as Pre-Events</b> to help you get started.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="faq-individual" eventKey="5">
          <Accordion.Header className="faq-header">
            <b>Does it cost anything?</b>
          </Accordion.Header>
          <Accordion.Body>
            BUGTRONS is <b>100% free</b>. You don’t have to spend anything!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="faq-individual" eventKey="6">
          <Accordion.Header className="faq-header">
            <b>Can we form teams?</b>
          </Accordion.Header>
          <Accordion.Body>
            As other contests, we judge your performance on{" "}
            <b>individual basis</b>, and hence not a team-event.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="faq-individual" eventKey="7">
          <Accordion.Header className="faq-header">
            <b>What is the Code of Conduct?</b>
          </Accordion.Header>
          <Accordion.Body>
            We want to ensure a <b>positive experience</b> for all participants.
            We will be following BUGTRONS's Code of Conduct, we encourage you to
            read it{" "}
            <a href="https://github.com/bugtrons/bugtrons-2/blob/main/CODE_OF_CONDUCT.md">
              <b>here</b>
            </a>
            .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="faq-individual" eventKey="4">
          <Accordion.Header className="faq-header">
            <b>Don't find my questions listed here, what can I do?</b>
          </Accordion.Header>
          <Accordion.Body>
            You can always contact us at{" "}
            <b>
              <a href="mailto:contact@bugtrons.co">contact@bugtrons.co</a>
            </b>{" "}
            and we would be more than happy to help you.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
