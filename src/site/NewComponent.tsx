type NewComponentType = {
    students: StudentType[];
};
type StudentType = {
    id: number;
    name: string;
    age: number;
};

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((object: StudentType) => {
                return (
                    <li key={object.id}>
                        {object.name} age: {object.age}
                    </li>
                );
            })}
        </ul>
    );
};
