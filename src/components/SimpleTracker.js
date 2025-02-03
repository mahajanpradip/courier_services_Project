import React, { useState } from 'react';
import "../css/CourierTracking.css";

const SimpleTracker = () => {
    const [trackingId, setTrackingId] = useState('');
    const [courierData, setCourierData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleTrack = async () => {
        if (!trackingId) {
            setError('Please enter a valid tracking ID.');
            setCourierData(null);  
            return;
        }
    
        setLoading(true);
        setError(null);
        setCourierData(null);
    
        try {
            const response = await fetch(`http://localhost:7575/api/courier/${trackingId}`);
    
            if (!response.ok) {
                throw new Error('Failed to fetch tracking information. Please check the tracking ID or try again.');
            }
    
            const text = await response.text();
            if (!text) {
                throw new Error('Invalid tracking ID or data not found. Please check and try again.');
            }
    
            const data = JSON.parse(text);
    
            if (!data || !data.status || !data.location) {
                throw new Error('Invalid tracking ID or data not found. Please check and try again.');
            }
    
            setCourierData(data);
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
            setCourierData(null);  
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="Parenttracking">
        <div className="container CourierTrackingc">
            <h1 className="Cttitle">Courier Tracker</h1>
            <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Tracking ID"
                className="trackingidinput"
            />
            <button onClick={handleTrack} className="trackingbtn">
                Track
            </button>    

            {loading && <p className="trackingloading">Loading...</p>}
            {error && <p className="trackingerror">{error}</p>}
            {courierData && (
                <div className="trackingdetails">
                    <h2 id="trdtitle">Tracking Details</h2>
                    <p><strong>Status:</strong> {courierData.status}</p>
                    <p><strong>Location:</strong> {courierData.location}</p>
                    <p><strong>Expected Delivery:</strong> {courierData.estimatedDelivery}</p>
                </div>
            )}
        </div>
        </div>
    );
};

export default SimpleTracker;















