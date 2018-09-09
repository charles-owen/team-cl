
export const Team = function(data) {
	if(data !== undefined) {
		this.name = data.name;
		this.id = data.id;
		this.members = data.members;
	} else {
		this.name = '';
		this.id = 0;
		this.members = [];
	}

	this.clone = function() {
		return new Team(this);
	}
}