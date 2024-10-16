import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const AboutUs = () => {
  return (
    <>
      <Nav />
      <div>
        <section className="sl-main-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <div className="sl-sectionHead" style={{ textAlign: "left" }}>
                  <h2 style={{ paddingTop: "2%" }}>Who we are?</h2>
                  <p>
                    <br />
                    InkJetCare is an exhaustive tech and machine fix administration
                    supplier that takes InkJetCare of a great many electronic gadgets and
                    apparatuses. Represent considerable authority in administrations for PCs &amp; Tablets,
                    Cell phones, Printers, WiFi &amp; Systems administration, television &amp; Home
                    Theater, Computer games &amp; Amusement, Cameras &amp; Camcorders,
                    Shrewd Home, Home Security, Robots, Sound &amp; Video, television Mounting,
                    Significant Apparatuses, Little Machines, and that's only the tip of the iceberg,  InkJetCare means to
                    address the different fix administration requirements of its clients.
                  </p>
                  <p>
                    <br />
                    One outstanding component of  InkJetCare is their obligation to provoke and
                    productive assistance. Clients can advantageously book arrangements for
                    fixes, establishments, investigating, or gadget pickups. The
                    organization's specialists are furnished with the information and abilities to
                    quickly analyze and address a wide cluster of tech-related issues,
                    guaranteeing that clients can return to utilizing their gadgets without
                    superfluous deferrals.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <img src="../assets/about-us-banner-sq.webp" alt="" />
              </div>
              <div className="col-lg-12 col-xl-12">
                <div className="sl-sectionHead" style={{ textAlign: "left" }}>
                <p>
                    <br/>
                     InkJetCare likewise underlines the significance of keeping clients
                    associated. Notwithstanding fix administrations, they offer insurance
                    plans to defend gadgets from expected harm. Whether it's a
                    broken screen on a cell phone, a failing machine, or a
                    organizing issue,  InkJetCare endeavors to give far reaching
                    arrangements that cover the whole range of tech and apparatuses
                   InkJetCare.
                  </p>
                  <p>
                    <br/>
                    With an expansive scope of administrations covering different tech and machine
                    classifications,  InkJetCare positions itself as a one-stop answer for
                    people looking for dependable and master help with their
                    electronic gadgets and apparatuses. Whether it's upgrading the
                    execution of a PC, fixing a cell phone misfire, setting up a
                    home theater framework, or resolving issues with shrewd home gadgets,
                     InkJetCare is committed to making innovation available and
                    practical for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default AboutUs
