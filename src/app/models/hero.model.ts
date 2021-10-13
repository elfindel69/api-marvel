export class Hero{

  private _id: number|null;
  private _name: string;
  private _description: string;
  private _modified: Date;
  private _thumbnail: {
      path: string,
      extension:string
  };
  private _resourceUri: string;


    constructor(id: number | null, name: string, description: string, modified: Date, thumbnail: { path: string; extension: string }, resourceUri: string) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._modified = modified;
        this._thumbnail = thumbnail;
        this._resourceUri = resourceUri;
    }


    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get modified(): Date {
        return this._modified;
    }

    set modified(value: Date) {
        this._modified = value;
    }

    get thumbnail(): { path: string; extension: string } {
        return this._thumbnail;
    }

    set thumbnail(value: { path: string; extension: string }) {
        this._thumbnail = value;
    }

    get resourceUri(): string {
        return this._resourceUri;
    }

    set resourceUri(value: string) {
        this._resourceUri = value;
    }

    static fromJson(json:any):Hero{
        return new Hero(
            json.id,
            json.name,
            json.description,
            json.modified,
            json.thumbnail,
            json.resourceUri);
    }


}
