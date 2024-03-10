type CarComponentType = {
    Cars: CarType[];
};
type CarType = {
    manufacturer: string;
    model: string;
};

export const NewComponent1 = (props: CarComponentType) => {
    return (
        <table>
            <td>
                {props.Cars.map((car, index) => {
                    return (
                        <tr key={index + 1}>
                            {index + 1} {car.manufacturer} {car.model}
                        </tr>
                    );
                })}
            </td>
        </table>
    );
};
