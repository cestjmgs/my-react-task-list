export const Task = (props) => {
    const { name } = props; 

    return (
        <div> 
            <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" /> { name } 
                </label>     
        </div>
    );
}