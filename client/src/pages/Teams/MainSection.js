import React from 'react';
import teamData from './teamsData'; // Import the team data
import Card from './Card'; // Import the Card component

const MainSection = () => {
  return (
    <div className="containerteam">
      {/* <span className='big-circle-team'></span> */}
      {teamData.map((member, index) => (
        <Card
          key={index}
          name={member.name}
          imageSrc={member.image}
          profession={member.position}
          socialLinks={[
            { url: member.instagram, icon: 'fa fa-instagram' },
            { url: member.linkedin, icon: 'fa fa-linkedin' },
          ]}
        />
      ))}
    </div>
  );
};

export default MainSection;