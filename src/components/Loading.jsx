import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Loading() {
  return (
    <div className='container'>
      <div className='container d-flex flex-column align-items-center justify-content-center'>
        <h1>Carregando página</h1>
        <h4 className='text-secondary'>...</h4>
      </div>
    </div>
  )
}
