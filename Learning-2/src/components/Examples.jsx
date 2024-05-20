import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, showSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    showSelectedTopic(selectedButton);
    //console.log("1  =>", selectedButton);
    //console.log("2  =>", selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <Tabs buttons={
          <>
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
        </>
      }></Tabs>
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
  );
}
