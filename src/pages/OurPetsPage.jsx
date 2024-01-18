import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import { Container } from "../components/Container"
import { TheHeader } from "../components/TheHeader"
import { Footer } from "../components/Footer"

import { InfoComponyDefault } from "../mock/index";
import Pagination from "../components/Pagination/Pagination";



export const OurPetsPage = () => {

  const [local, setLocal] = useState(InfoComponyDefault)
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  useEffect(() => {
    setLocal(local);
  }, [local, setLocal]);

  return (
    <>
      <TheHeader />
      <Pagination />
      <Container>
        <button onClick={goBack}>go home</button>

        <Footer {...local} />
      </Container>
    </>
  )
}

