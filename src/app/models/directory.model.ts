// tslint:disable-next-line:whitespace
// tslint:disable-next-line:one-line
export class Directory {
  name: string;
  directories: Array<Directory>;
  files: Array<any>;
  expanded: boolean = false;
  checked: boolean = false;

  constructor(data:{
    name?: string,
    directories?: Array<Directory>,
    files?: Array<any>
  } = {}
    ) {
      this.name = data.name;
      this.directories = data.directories || [];
      this.files = data.files || [];
  }

  toggle() {
    this.expanded = !this.expanded;
  }
  check() {
    let newState = !this.checked;
    this.checked = newState;
    this.checkRecursive(newState);
  }
  checkRecursive(newState: boolean){
    this.directories.forEach(element => {
      element.checked = newState;
      element.checkRecursive(newState);
    });
  }
}
