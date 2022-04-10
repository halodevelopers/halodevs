import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import SocialBanner from "../components/SocialBanner";
import Particles from "react-tsparticles";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (

    <header className={clsx("hero ", styles.heroBanner)}>

      <div className="container">

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--primary button--lg button--sm ", styles.button)}
            to="/docs/intro">
            Check our projects tutorials
          </Link>
          <Link
            className={clsx("button button--primary button--lg button--sm ", styles.buttonsecond)}
            >
            Hackathons
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={"Halodevs"} description={"siteConfig.description"}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
