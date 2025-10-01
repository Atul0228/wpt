import React, { useState } from 'react';

// Graduate Component
function Grad_comp() {
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [finalScore, setFinalScore] = useState('');
  const [univ, setUniv] = useState('');

  return (
    <div>
      <h3>Graduate Details</h3>
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={e => setDegree(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
      />
      <input
        type="number"
        placeholder="Final Year Score"
        value={finalScore}
        onChange={e => setFinalScore(e.target.value)}
      />
      <input
        type="text"
        placeholder="University"
        value={univ}
        onChange={e => setUniv(e.target.value)}
      />
    </div>
  );
}

// PG Component
function PGComponent() {
  const [year, setYear] = useState('');
  const [thesis, setThesis] = useState('');

  return (
    <div>
      <h3>Post Graduate Details</h3>
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Thesis Subject"
        value={thesis}
        onChange={e => setThesis(e.target.value)}
      />
    </div>
  );
}

// UnderGrad Component
function UnderGradComponent() {
  const [ssc, setSsc] = useState('');
  const [hsc, setHsc] = useState('');

  return (
    <div>
      <h3>Under Graduate Details</h3>
      <input
        type="text"
        placeholder="SSC"
        value={ssc}
        onChange={e => setSsc(e.target.value)}
      />
      <input
        type="text"
        placeholder="HSC"
        value={hsc}
        onChange={e => setHsc(e.target.value)}
      />
    </div>
  );
}

// Main UserDetails component
export default function UserDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>User Details</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <select
        value={education}
        onChange={e => setEducation(e.target.value)}
        style={{ width: '100%', marginBottom: '20px', padding: '8px' }}
      >
        <option value="">Select Education</option>
        <option value="Graduate">Graduate</option>
        <option value="PG">PG</option>
        <option value="UnderGrad">UnderGrad</option>
      </select>

      {education === 'Graduate' && <GraduateComponent />}
      {education === 'PG' && <PGComponent />}
      {education === 'UnderGrad' && <UnderGradComponent />}
    </div>
  );
}
