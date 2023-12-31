﻿import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact(){

    return(
        <>

<Container fluid id='contact'>
     <div id='formation'> <h1 className='conLine'>Contact </h1>
      <h2>I'm always open to discussing development projects or partnerships.</h2>
      <form onSubmit={formik.handleSubmit}>
      <Row className='mt-3 mb-3'>
        <Col className='mt-3'  xl={6} md={6} sm={6} xs={12}>
          <input
           className={(formik.errors.name && formik.touched.name ? ' invalid' : '')}
            id="name"
            type="text"
            name='name'
            placeholder='Enter Your Full Name'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div><h5 className='err'>{formik.errors.name}</h5></div>
          ) : null} </Col>
        <Col  className="mt-3"xl={6} md={6} sm={6} xs={12}>
          <input id="email" name='email' placeholder='Enter Your Email'
           className={(formik.errors.email && formik.touched.email ? ' invalid' : '')} {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div><h5 className='err'>{formik.errors.email}</h5></div>
          ) : null}</Col>
      </Row>
      <Row className='mt-3 mb-3'>
        <Col>

          <input
           className={(formik.errors.phone && formik.touched.phone ? ' invalid' : '')}
          id="phone" type="phone" name='phone' placeholder='Enter Your Phone #'
           {...formik.getFieldProps('phone')} />
          {formik.touched.phone && formik.errors.phone ? (
            <div><h5 className='err'>{formik.errors.phone}</h5></div>
          ) : null}
        </Col></Row>
      <Row className='mt-3 mb-3'><Col>
        <input id="subject" type="subject" name='subject' placeholder='Enter Subject'
          className={(formik.errors.subject && formik.touched.subject ? ' invalid' : '')}
        {...formik.getFieldProps('subject')} />
        {formik.touched.subject && formik.errors.subject ? (
          <div><h5 className='err'>{formik.errors.subject}</h5></div>
        ) : null}
      </Col>     </Row>
      <Row className='mt-3 mb-3'><Col className='text-center'>
        <textarea
         className={(formik.errors.message && formik.touched.message ? ' invalid' : '')}
        id="message" type="message" name='message' placeholder='Type Your Message' {...formik.getFieldProps('message')} />
        {formik.touched.message && formik.errors.message ? (
          <div><h5 className='err'>{formik.errors.message}</h5></div>
        ) : null} </Col>
      </Row><Row className='mt-3 mb-3'>
        <Col className='text-center'> <button id='contactBtn' type="submit" className='mx-auto'>Submit</button></Col>
      </Row></form></div>
      <Row className='mt-3 mb-3'>
        <Col><div id='hider' className='hide'> <h1>Submitted Successfully!</h1>
        <p>I will be in touch with you within 48 hours. Thank you!</p></div></Col>
      </Row>
  </Container>
        </>
    )
}