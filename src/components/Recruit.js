import React from 'react'
import './Recruit.css'
import Listitem from './Listitem'

function Recruit() {
    return (
        <div className="main__recruit">
            <div className="recruit__header">
                <div className="rec__name">
                    <p>Recruitment Progress</p>
                </div>
                <div className="rec__button">
                    <button id='btn' type="submit">View All</button>
                </div>
            </div>

            <div className="recruit__lists">
                <div className="recruit__fields">
                    <p id="name">Full Name</p>
                    <p id="designation">Designation</p>
                    <p id="status">Status</p>
                </div>
                <div className="recruit__list">
                    <Listitem name='John' designation='Developer' status='Active'  />
                    <Listitem name='John' designation='Developer' status='Active'  />
                    <Listitem name='John' designation='Developer' status='Active'  />
                    <Listitem name='John' designation='Developer' status='Active'  />
                </div>
            </div>

            
        </div>
    )
}

export default Recruit
