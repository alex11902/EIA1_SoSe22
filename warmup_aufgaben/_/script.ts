var names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
#ff0088
function sortascending()
{
    names.sort((a,b) => a.firstname.localCompare(b.firstname))
}

    document.getElementById("buttonAufsteigend").addEventListener("click",sortascending)