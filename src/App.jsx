import { useState } from "react";
import { Calculator } from "./components/styles/Calculator.style";
import { Container } from "./components/styles/Container.style";
import { Display } from "./components/styles/Display.style";
import { Form } from "./components/styles/Form.style";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { Input } from "./components/styles/Input.style";

function App() {
  const [value, setValue] = useState("");

  const handleOperations = ({ target }) => {
    const clickedElement = target.value;
    if (clickedElement === "Clear") {
      return setValue("");
    }
    if (clickedElement === "Del") {
      return setValue(value.slice(0, -1));
    }
    if (clickedElement === "=") {
      return setValue(eval(value));
    }
    if (clickedElement) {
      return setValue(value + clickedElement);
    }
  };

  return (
    <main>
      <GlobalStyles />

      <Container>
        <Calculator>
          <Form onClick={handleOperations}>
            <div>
              <Display type="text" value={value} />
            </div>
            <div>
              <Input type="button" value="Clear" />
              <Input type="button" value="Del" />
              <Input type="button" value="." />
              <Input type="button" value="/" />
            </div>
            <div>
              <Input type="button" value="7" />
              <Input type="button" value="8" />
              <Input type="button" value="9" />
              <Input type="button" value="*" />
            </div>
            <div>
              <Input type="button" value="4" />
              <Input type="button" value="5" />
              <Input type="button" value="6" />
              <Input type="button" value="+" />
            </div>
            <div>
              <Input type="button" value="1" />
              <Input type="button" value="2" />
              <Input type="button" value="3" />
              <Input type="button" value="-" />
            </div>
            <div>
              <Input type="button" value="0" />
              <Input type="button" value="=" />
            </div>
          </Form>
        </Calculator>
      </Container>
    </main>
  );
}

export default App;
