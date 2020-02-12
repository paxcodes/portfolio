import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BuiltWith from "../components/builtWith"
import Screenshots from "../components/screenshots"

import "../css/global.css"
import styles from "../css/projects.module.css"

import chromeExtBeforeGIF from "../images/screenshots/chromeext-before.gif"
import chromeExtAfterGIF from "../images/screenshots/chromeext-after.gif"
import psTests from "../images/screenshots/peppsnipp/ps-testscripts.png"
import psFrontEnd1 from "../images/screenshots/peppsnipp/ps-frontend1.png"
import psFrontEnd3 from "../images/screenshots/peppsnipp/ps-frontend3.png"
import logos from "../images/logos/logos"

const ProjectsPage = () => (
  <Layout title="My work.">
    <SEO title="Projects" />
    <h3>
      <a href="https://github.com/paxcodes/peppsnipp">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The Pepperplate Snipper
      </a>
    </h3>
    <BuiltWith
      items={[
        {
          href: "https://www.python.org/",
          description: "Python",
          src: logos.python,
        },
        {
          href: "https://docs.pytest.org/en/latest/",
          description: "PyTest",
          src: logos.pytest,
        },
        {
          href: "https://selenium-python.readthedocs.io/",
          description: "Selenium",
          src: logos.selenium,
        },
        {
          href: "https://pypi.org/project/PyQt5/",
          description: "PyQt5",
          src: logos.qt,
        },
      ]}
    />
    <p>
      The Pepperplate Snipper exports recipes in your Pepperplate account as
      JSON and/or PNG screenshots.
    </p>
    <Screenshots
      images={[
        {
          src: psTests,
          description: "Tests for the Pepperplate Crawler",
        },
        {
          src: psFrontEnd1,
          description: "Initial process",
        },
        {
          src: psFrontEnd3,
          description: "Exporting recipes",
        },
      ]}
    />

    <h3>
      <a href="https://babysleep.app">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The Baby Schedule Maker
      </a>
    </h3>
    <BuiltWith
      items={[
        {
          href: "https://phpunit.de/",
          description: "PHPUnit",
          src: logos.phpunit,
        },
        {
          href: "http://cypress.io/",
          description: "Cypress—for E2E testing",
          src: logos.cypress,
        },
        {
          href: "http://laravel.com/",
          description: "Laravel—a PHP framework",
          src: logos.laravel,
        },
        {
          href: "https://vuejs.org/",
          description: "Vue.js",
          src: logos.vue,
          width: 40,
        },
        {
          href: "https://vuex.vuejs.org/",
          description: "Vuex",
        },
      ]}
    />
    <p>
      This page provides a sample nap schedule but unlike most—if not all—baby
      schedule generators, the time and length of naps or awake times can be
      adjusted.
    </p>

    <h3>SoundCloud Chrome Extension</h3>
    <BuiltWith
      items={[
        {
          href: "#",
          description: "Javascript",
          src: logos.js,
        },
        {
          href: "https://developer.chrome.com/extensions",
          description: "Chrome extension",
          src: logos.chrome,
        },
      ]}
    />
    <p>
      A private chrome extension to check whether broadcasts are properly
      uploaded to SoundCloud. This turned a tedious 15-minute task into
      something that can be done in a few seconds.
    </p>
    <Screenshots
      label="animation showing how the extension works"
      images={[
        {
          src: chromeExtBeforeGIF,
          description: "before the broadcasts were uploaded",
        },
        {
          src: chromeExtAfterGIF,
          description: "after the broadcasts were uploaded",
        },
      ]}
    />

    <h3>
      <a href="https://www.insightforliving.ca">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        Insight for Living Canada
      </a>
    </h3>
    <p>
      Website for the organization, Insight for Living Canada&mdash;the
      Bible-teaching ministry of Charles (Chuck) Swindoll.
    </p>
    <ul>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Drupal 7
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Backend Development
      </li>
      <li className={`${styles.item} leading-tight`}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Social Media Metadata <em>for beautiful share previews</em>
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        ConstantContact and SoundCloud Integration
      </li>
    </ul>

    <h3>
      <a href="https://www.theshiyrpoets.com">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The SHIYR Poets
      </a>
    </h3>
    <p>
      Website for the band, The SHIYR Poets. The SHIYR Poets (pronounced
      “Sheer”) are Brian Doerksen, Calum Rees, Brian Thiessen and Teresa Trask.
      They aim to render each psalm in its entirety, singing songs of
      desperation, desire, justice and praise.
    </p>
    <ul>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Drupal 7
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Full-Stack Development
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Phase 1: Paypal Buttons
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Phase 2: Drupal Commerce
      </li>
    </ul>
  </Layout>
)

export default ProjectsPage
