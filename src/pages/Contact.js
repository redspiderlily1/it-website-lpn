import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>ติดต่อเรา</h2>
      <p>โทรศัพท์: 053-123456</p>
      <p>อีเมล: info@polytechnic.ac.th</p>
      <iframe
        title="แผนที่"
        src="⁦https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8488407217235!2d99.0058903151591!3d18.780610987295264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a71517c8c67%3A0xa1e0ae1d3d30d517!2sLanna%20Polytechnic!5e0!3m2!1sen!2sth!4v1685591612631!5m2!1sen!2sth⁩"
        style={{ border: 0, width: '100%', height: '300px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;