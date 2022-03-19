import React from "react";
import ownStyles from "./Structure.module.css";
import { ContainerSection } from "../../Containers";
import { LineTitle ,SecondaryTitle} from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
export default function index() {
  return <ContainerSection>
    <LineTitle text={"OUR PRICING"}/>
    <SecondaryTitle style={{textAlign:'left'}} text={"Fair Fee Structure"}/>
    <SecondaryParagraph content={"Pay as you go network transaction fees & a fair revenue share model that incentivizes your project's success - initial mint & long term."}/>
  </ContainerSection>;
}
