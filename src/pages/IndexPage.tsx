import React from "react"
import Header from "../components/ui/header"
import MainBlock from "../components/indexVariant"
import CurrentDateTime from "../components/timeAndDate"

const IndexPage: React.FC = () => {
    return (
        <>
        <Header text="" type="currency"/>
        <MainBlock />
        <CurrentDateTime />
        </>
    )
}

export default IndexPage