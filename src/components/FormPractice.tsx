import { z } from 'zod';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';

const schema = z.object({
    name: z.string().min(8, {message: 'Name must contain minimum of 8 characters'}),
    age: z.number().min(18 , {message: 'Age must be greater than 18 to apply'}),
})

type FormData = z.infer<typeof schema>;

const FormPractice = () => {

    const {register , handleSubmit , formState : {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data : FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
            <label htmlFor="name">Enter Your Name: </label>
            <input 
            {...register('name')}
            id="name" 
            className='form-control' />
            {errors.name && <p>{errors.name.message}</p>}
        </div>

        
        <div className="form-group">
            <label htmlFor="age">Enter Your Age: </label>
            <input
            {...register('age',{valueAsNumber:true})}
            id="age"
            className='form-control' />
             {errors.age && <p>{errors.age.message}</p>}

        </div>
        <div className='form-group'>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
    </form>
  )
}

export default FormPractice