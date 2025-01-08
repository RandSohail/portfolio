import Typewriter from 'typewriter-effect';

export default function Type() {
  return (
    <h2 style={{ marginBottom: '20px' }}>
      <Typewriter
        options={{
          strings: [
            'Full Stack Developer',
            'MERN Stack Developer',
            'Project Manager',
            'Freelancer'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </h2>
  );
}
