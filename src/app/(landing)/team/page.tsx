'use client';
import React, { useState, useEffect } from 'react';
import coreData from '@/Data/core.json';
import teamsData from '@/Data/dev.json';
import styles from '@/css/landing/teams/Teams.module.scss';
import coreStyles from '@/css/landing/teams/coreTeam.module.scss';
import Image from 'next/image';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Preloader from '@/components/landing/preloader/preloader';

const trailProps = {
  lineDuration: 0,
  lineWidthStart: 7,
  strokeColor: "#df95fc",
  lag: 0,
};

interface TeamMember {
  id: number;
  name: string;
  class?: string;
  image: string;
  about: string;
  githubLink?: string;
  linkedinLink?: string;
  mobileNumber: string;
}

const Teams: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState('developer');
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [isConnectingLinkedIn, setIsConnectingLinkedIn] = useState(false);
  const [isConnectingGitHub, setIsConnectingGitHub] = useState(false);
  const currentTeamData = selectedTeam === 'developer' ? teamsData : coreData;
  const teamStyles = selectedTeam === 'developer' ? styles : coreStyles;

  const handleTeamTabClick = (team: string) => {
    setSelectedTeam(team);
    setSelectedTeamMember(null);
  };

  const handleTeamMemberClick = (teamMember: TeamMember) => {
    setSelectedTeamMember(teamMember);
  };

  const handleClosePopup = () => {
    setSelectedTeamMember(null);
  };

  const handleConnectLinkedInButtonClick = async () => {
    setIsConnectingLinkedIn(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsConnectingLinkedIn(false);
    } catch (error) {
      console.error('LinkedIn Connection error:', error);
      setIsConnectingLinkedIn(false);
    }
  };

  const handleConnectGitHubButtonClick = async () => {
    setIsConnectingGitHub(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsConnectingGitHub(false);
    } catch (error) {
      console.error('GitHub Connection error:', error);
      setIsConnectingGitHub(false);
    }
  };

  useEffect(() => {
    document.body.classList.add(teamStyles['black-background']);
    return () => {
      document.body.classList.remove(teamStyles['black-background']);
    };
  }, [teamStyles]);

  return (
    <div className={`${teamStyles['teams-section']} ${selectedTeam === 'core' && coreStyles['core-section']}`} style={{ backgroundImage: 'url(./images/dark-purple-bg.jpg)', backgroundSize: 'cover' }}>
      <div className={teamStyles['team-tabs']}>
        <span
          className={`${teamStyles['team-tab']} ${selectedTeam === 'developer' && teamStyles['active-tab']}`}
          onClick={() => handleTeamTabClick('developer')}
        >
          Developers Team
        </span>
        <span
          className={`${teamStyles['team-tab']} ${selectedTeam === 'core' && teamStyles['active-tab']}`}
          onClick={() => handleTeamTabClick('core')}
        >
          Core Team
        </span>
      </div>
      <h1 className={`${teamStyles['section-title']} ${teamStyles['title']}`}>
        {selectedTeam === 'developer' ? 'Developers Team' : 'Core Team'}
      </h1>
      <div className={teamStyles['team-container']}>
        {currentTeamData.map((teamMember) => (
          <div
            key={teamMember.id}
            className={teamStyles['team-member']}
            onClick={() => handleTeamMemberClick(teamMember)}
          >
            <div className={teamStyles['card']}>
              <div className={teamStyles['image-container']}>
                <Image src={teamMember.image} alt={teamMember.name} width={200} height={200} />
              </div>
              <div className={teamStyles['card-body']}>
                <h3 className={teamStyles['member-name']}>{teamMember.name}</h3>
                <p className={teamStyles['member-class']}>{teamMember.class}</p>
                <p className={teamStyles['member-mobile']}>{teamMember.mobileNumber}</p>
              </div>
            </div>
            <div style={{ zIndex: 1000 }}>
              <MouseTrail {...trailProps} />
            </div>
          </div>
        ))}
      </div>
      {selectedTeamMember && selectedTeam === 'developer' && (
        <div className={teamStyles['popup']}>
          <div className={teamStyles['popup-content']}>
            <span className={teamStyles['close']} onClick={handleClosePopup}>
              &times;
            </span>
            <div className={teamStyles['popup-image-container']}>
              <Image src={selectedTeamMember.image} alt={selectedTeamMember.name} className={`w-full rounded-full aspect-square object-cover`} width={200} height={200} />
            </div>
            <div className={teamStyles['popup-text']}>
            <h2>{selectedTeamMember.name}</h2>
            </div>
            <p>{selectedTeamMember.class}</p>
            <p>{selectedTeamMember.about}</p>
            <p>{selectedTeamMember.mobileNumber}</p>
            <div style={{ display: 'flex' }}>
              <a
                href={selectedTeamMember.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${teamStyles['follow-button']} ${isConnectingLinkedIn && teamStyles['connecting']}`}
                onClick={handleConnectLinkedInButtonClick}
              >
                {isConnectingLinkedIn ? 'Connecting...' : (
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                    {isConnectingLinkedIn ? 'Connecting...' : 'LinkedIn'}
                  </span>
                )}
              </a>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              {selectedTeamMember.githubLink && (
                <a
                  href={selectedTeamMember.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${teamStyles['follow-button2']} ${isConnectingGitHub && teamStyles['connecting']}`}
                  onClick={handleConnectGitHubButtonClick}
                >
                  {isConnectingGitHub ? 'Following...' : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                      {isConnectingGitHub ? 'Following...' : 'GitHub'}
                    </span>
                  )}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      <Preloader logo='/auth/1.png' />
    </div>
  );
};

export default Teams;
