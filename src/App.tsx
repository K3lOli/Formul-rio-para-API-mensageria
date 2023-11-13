import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";
import { useIdentityMutation } from "./hooks/useIdentityMutation";

function App() {
  const { mutate } = useIdentityMutation();
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const submit = () => {
    mutate({
      email,
      firstName,
      secondName,
    });
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="name-form-container">
            <PrimaryInput
              name="firstName"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setFirstName(e.target.value)}
              label="Nome"
              placeholder="Digite seu nome"
            />
            <PrimaryInput
              name="secondName"
              value={secondName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSecondName(e.target.value)}
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
            />
          </div>
          <Spacer height={4}/>
          <PrimaryInput
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <Spacer height={4}/>
          <Button className="button" colorScheme="pink" variant="solid" width="100%" onClick={submit}>
            Enviar
          </Button>
        </form>
        <Spacer width={6} maxWidth={6}/>
        <div className="products-datails">
          <h1>Assinatura Mensal</h1>
          <p>Você irá pagar</p>
          <span>R$ 250,00</span>
          <p>Regras: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas cumque, sapiente, repellat earum suscipit ex ad voluptate quis amet nesciunt exercitationem? Recusandae autem sequi repudiandae quibusdam illum culpa, fuga corporis!</p>
        </div>
      </div>
    </>
  );
}

export default App;
