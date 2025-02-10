```javascript
// app/page.js
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  //Simulate dynamic route loading issues
  const simulateError = Math.random() < 0.5; // 50% chance of error simulation

  if(simulateError){
    setTimeout(()=>{
       router.push('/404');
    }, 1000)
    return <p>Simulating loading error</p> 
  } else{
    return (
    <div>Hello, Next.js!</div>
    );
  }
}
```