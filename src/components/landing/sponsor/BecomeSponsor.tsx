import React, { useState } from 'react';
import styles from '@/css/landing/sponsor/sponsor.module.scss';
import { Button } from '@nextui-org/react';
import Contribute from '@/components/landing/vote/stardumcontri';

export default function BecomeSponsor() {
  const [sponsorshipType, setSponsorshipType] = useState('');
  const [sponsorOptions, setSponsorOptions] = useState('');
  const [partnerOptions, setPartnerOptions] = useState('');
  const [otherCategory, setOtherCategory] = useState('');
  const [isContributeOpen,setIsContributeOpen] = useState<boolean>(false);
  const HandleClosePopup = () =>{
    setIsContributeOpen(false);
  }

  const HandleOpenPopup = () =>{
    setIsContributeOpen(true);
  }

  const handleSponsorshipTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSponsorshipType(e.target.value);
  
    setSponsorOptions('');
    setPartnerOptions('');
    setOtherCategory('');
  };

  return (
    <section className={styles.sponsorshipOpportunities}>
      <h2 className={styles.goldenSubtitle}>Become a Sponsor</h2>
 
      <div className={styles.hoverBox} style={{ boxShadow:"0 0 20px #d3b15f"}}>
        <input type="text" placeholder="Company Name" className="forminput" required />
        <input type="text" placeholder="Contact Person" className="forminput" required />
        <input type="text" placeholder="Designation" className="forminput" required />
        <input type="tel" placeholder="Contact Number" className="forminput" required />

        <select
          className="forminput"
          value={sponsorshipType}
          onChange={handleSponsorshipTypeChange}
          required
        >
          <option value="">Select Sponsorship Type</option>
          <option value="sponsor">Sponsor</option>
          <option value="partner">Partner</option>
          <option value="both">Both</option>
        </select>

        {sponsorshipType === 'sponsor' && (
          <select className="forminput" required>
            <option value="powered_by">Powered By</option>
            <option value="events">Events</option>
            <option value="platinum">Platinum</option>
            <option value="diamond">Diamond</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
          </select>
        )}

        {sponsorshipType === 'partner' && (
          <select className="forminput" required>
            <option value="food">Food</option>
            <option value="technology">Technology</option>
            <option value="knowledge">Knowledge</option>
            <option value="media">Media</option>
            <option value="radio">Radio</option>
            <option value="other">Others</option>
          </select>
        )}

        {sponsorshipType === 'both' && (
          <>
            <select
              className="forminput"
              value={sponsorOptions}
              onChange={(e) => setSponsorOptions(e.target.value)}
              required
            >
              <option value="">Select Sponsorship</option>
              <option value="powered_by">Powered By</option>
              <option value="platinum">Platinum</option>
              <option value="diamond">Diamond</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="bronze">Bronze</option>
              <option value="associate">Associate</option>
            </select>
            <select
              className="forminput"
              value={partnerOptions}
              onChange={(e) => setPartnerOptions(e.target.value)}
              required
            >
              <option value="">Select Partner Type</option>
              <option value="food">Food</option>
              <option value="technology">Technology</option>
              <option value="knowledge">Knowledge</option>
              <option value="media">Media</option>
              <option value="radio">Radio</option>
              <option value="other">Others</option>
            </select>
          </>
        )}

        {sponsorshipType === 'partner' && partnerOptions === 'other' && (
          <input
            type="text"
            placeholder="Specify Partner Type"
            className="forminput"
            value={otherCategory}
            onChange={(e) => setOtherCategory(e.target.value)}
            required
          />
        )}

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </div>
      <div className={styles.buttonContainer}>
            <Button color={'secondary'} variant={'solid'} onClick={HandleOpenPopup}>PAY NOW!</Button>
          </div>
          <Contribute isModelOpen={isContributeOpen}  CloseModel={HandleClosePopup} />
    </section>
  );
}
