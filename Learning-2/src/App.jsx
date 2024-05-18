import React from "react";
import { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";
import Section1 from "./components/Section1";

function App() {
  const [selectedTopic, showSelectedButton] = useState();

  function handleSelect(selectedButton) {
    showSelectedButton(selectedButton);
    console.log("1  =>", selectedButton);
    console.log("2  =>", selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <Section1 />
        
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onselect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onselect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onselect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onselect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? <p>Please Select a topic </p> : null}

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
