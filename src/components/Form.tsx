import { useForm , FieldValues} from 'react-hook-form';
import { z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3,{message : 'Name must contain minimum of three characters'}),
  age: z.number().min(18, {message: 'Age must be greater than 18 to apply'}),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
    const {register , handleSubmit , formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});
    
    const Submit = (data : FieldValues) => console.log(data);


    return (

    <form onSubmit={handleSubmit(Submit)}>

        <div className="form-group">
            <label htmlFor="name"  className='form-label'>Enter Your Name: </label>
            <input {...register('name')} className='form-control' id="name"  />
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
        </div>

        <div className="form-group">
            <label htmlFor="age" className='form-label'>Enter Your Age: </label>
            <input {...register('age',{valueAsNumber:true})} className='form-control' id="age"  />
            {errors.age && <p className='text-danger'>{errors.age.message}</p>}

        </div>

        <div className="form-group">
            <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
    </form>


  )
}

export default Form