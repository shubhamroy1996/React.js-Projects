import "../../src/style.css";
import { Core_Concept } from "../data";
import CoreConcept from './CoreConcept'

export default function CoreConcepts() {
    return (
<section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={Core_Concept[0].title}
              image={Core_Concept[0].image}
              description={Core_Concept[0].description}
            />
            <CoreConcept {...Core_Concept[1]} />
            <CoreConcept {...Core_Concept[2]} />
            <CoreConcept {...Core_Concept[3]} /> */}

            {/* Below method is better way to implement when their are multiples of them */}

            {Core_Concept.map( (conceptItem) => 
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )}
          </ul>
        </section>
    );
}