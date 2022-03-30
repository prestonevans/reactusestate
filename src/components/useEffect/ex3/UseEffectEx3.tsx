import { useEffect, useState } from 'react';
import { Users } from './interface';

export default function UseEffectEx3() {
  const [users, setUsers] = useState<Users[]>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const json = await fetch('https://api.github.com/users');
    const users = await json.json();
    setUsers(users);
  };

  return (
    <div>
      {!users ? (
        <p>loading</p>
      ) : (
        users.map(({id, login,avatar_url,html_url}) => {
          return <p key={id}>{login}</p>;
        })
      )}
    </div>
  );
}
