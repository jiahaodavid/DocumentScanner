import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
//import SmallStats from "./../components/common/SmallStats";
import NewDraft from "./../components/blog/NewDraft";

const BlogOverview = ({ smallStats }) => ( <
    Container fluid className = "main-content-container px-4" > { /* Page Header */ } <
    Row noGutters className = "page-header py-4" >
    <
    PageTitle title = "Blog Overview"
    subtitle = "Dashboard"
    className = "text-sm-left mb-3" / >
    <
    /Row>

    { /* New Draft */ } <
    Col lg = "4"
    md = "6"
    sm = "12"
    className = "mb-4" >
    <
    NewDraft / >
    <
    /Col>

    <
    /Container>
);


export default BlogOverview;