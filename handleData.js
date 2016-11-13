candidates = {"Donald Glover" : {"Donald Glover" : 0, "Frank N. Stein" : 0, "Harambe" : 0, "Harry Johnson" : 0, "Hilary Duff" : 0},
	"Frank N. Stein" : {"Donald Glover" : 0, "Frank N. Stein" : 0, "Harambe" : 0, "Harry Johnson" : 0, "Hilary Duff" : 0},
	"Harambe" : {"Donald Glover" : 0, "Frank N. Stein" : 0, "Harambe" : 0, "Harry Johnson" : 0, "Hilary Duff" : 0},
	"Harry Johnson" : {"Donald Glover" : 0, "Frank N. Stein" : 0, "Harambe" : 0, "Harry Johnson" : 0, "Hilary Duff" : 0},
	"Hilary Duff" : {"Donald Glover" : 0, "Frank N. Stein" : 0, "Harambe" : 0, "Harry Johnson" : 0, "Hilary Duff" : 0},
}

makeDataTable = function(){
	tables = {};
	tables["Hilary Duff"] = [0,0,0,0,0];
	tables["Donald Glover"] = [0,0,0,0,0];
	tables["Frank N. Stein"] = [0,0,0,0,0];
	tables["Harry Johnson"] = [0,0,0,0,0];
	tables["Harambe"] = [0,0,0,0,0];
	legend = ["Candidate", "Frank N. Stein","Donald Glover","Harambe","Hilary Duff","Harry Johnson", {role: 'annotation'}];
	Object.keys(candidates).forEach(function(x){
		tables[x] = Object.values(candidates[x]);
	})
	hilary = ["Hilary Duff",...tables["Hilary Duff"],''];
	donald = ["Donald Glover",...tables["Donald Glover"],''];
	frank = ["Frank N. Stein",...tables["Frank N. Stein"],''];
	harry = ["Harry Johnson",...tables["Harry Johnson"],''];
	harambe = ["Harambe",...tables["Harambe"],''];
	return [legend, donald, frank, harambe, harry, hilary];
}

doRunoff = function(votes){
	//replace votes with losing candidate at first with next candidate
	loser = findLoser(candidates);
	//candidates.remove(loser);
	delete candidates[loser];
	//debugger
	votes.slice(1,votes.length).forEach(function(x){
		if(x[0] == loser){			
			x = x.slice(1,x.length);
			//console.log(candidates);
			//console.log(x);
			while(!candidates[x[0]]){
				x = x.slice(1,x.length);
			}
			candidates[x[0]][loser] += 1;
			
		}else{
			x = x.slice(0,x.indexOf(loser)) + x.slice(x.indexOf(loser), x.length);
		}
	});
	return 1;
}

findCounts = function(votes){
	//debugger
	votes.slice(1,votes.length).forEach(function(x){
		//console.log(x[0]);
		candidates[x[0]][x[0]] += 1;
	})
	return 1;
}

findLoser = function(counts){
	minValue = 10001;
	loser = ""
	Object.keys(counts).forEach(function(x){
		total = findTotalForCandidate(x);
		if(total < minValue){
			minValue = total;
			loser = x;
		}
	})
	return loser;
}

findTotalForCandidate = function(cand){
	return Object.values(candidates[cand]).reduce(function(a,b){
		return a+b;
	})
}