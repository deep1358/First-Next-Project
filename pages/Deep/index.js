import Link from "next/link";
import styles from "../../styles/Ninja.module.css";

export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return{
    props:{ninjas:data}
  }
}

const Index = ({ninjas}) => {
  return (
    <div>
      <h1>Ninjas Here</h1>
      {
        ninjas.map(ninja=>
          <Link href={'/Deep/'+ninja.id} key={ninja.id}>
            <a className={styles.single}>{ninja.name} </a>
          </Link>
        )
      }
    </div>
  );
};

export default Index;
