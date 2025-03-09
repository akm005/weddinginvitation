import React from 'react'
import eventData from '../data/data'
import Story from '../story/Story'

export default function Events() {
  return (
    <section section-scroll="2" class="love-story section section-bg">

            <div className="container-fluid">

                <div class="row">

                    <div class="col-md-12 col-sm-12">

                        <div class="section-heading">

                            <h2>The Wedding Event</h2>

                        </div>

                    </div>

                </div>

                <div class="row">

                    <div class="col-md-12 col-sm-12">

                        <div class="love-story">

                            <div class="story-list">

                                <div class="row pb-0">
                                    <div className='col-12 col-md-6 story lefts'><Story  data={eventData[0]}/></div>
                                    <div className='col-12 col-md-6 story rights first'><Story  data={eventData[1]}/></div>
                                </div>

                                <div class="row pt-0 mt-md-n3 neg-mar">
                                    <div class="col-12 col-md-6 story lefts"><Story  data={eventData[2]}/></div>
                                    <div class="col-12 col-md-6 story rights first"><Story  data={eventData[3]}/></div>
                                </div>

                            </div>

                            <div class="clear"></div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
  )
}
