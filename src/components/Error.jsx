import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Error(props) {
  return (
    <div className='container'>
      <div className='container d-flex flex-column align-items-center justify-content-center'>
        <h1>{ props.error ? props.error : 'Ops!' }</h1>
        <h4 className='text-secondary'>{ props.message ? props.message : 'Ocorreu um erro.' }</h4>
      </div>
    </div>
  )
}
