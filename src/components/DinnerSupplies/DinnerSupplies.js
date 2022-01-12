function DinnerSupplies({supplies}){
    return(
        <>
        <h2>Dinner Supplies</h2>
        <div>
        Spoons: {supplies.length * 2}
        </div>
        <div>
        Forks: {supplies.length * 2}
        </div>
        <div>
        Knives: {supplies.length * 2}
        </div>
        </>
    );
}

export default DinnerSupplies;