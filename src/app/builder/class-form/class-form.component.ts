import { Component, EventEmitter, Input, Output } from '@angular/core';

type Class = {
  name: string;
  import: string;
  github: string;
  description: string;
  extends: {
    name: string;
    import: string;
  };
  implements: {
    name: string;
    import: string;
  }[];
  examples: {
    name: string;
    value: string;
  }[];
  properties: {
    name: string;
    type: string;
    description: string;
  }[];
  methods: {
    name: string;
    description: string;
    github: string;
    static: boolean;
    examples: {
      name: string;
      value: string;
    }[];
    params: {
      name: string;
      type: string;
      description: string;
      default: string;
      required: boolean;
    }[];
    returns: {
      required: boolean;
      type: string;
      description: string;
    };
  }[];
  constructors: {
    description: string;
    github: string;
    params: {
      name: string;
      type: string;
      description: string;
      default: string;
      required: boolean;
    }[];
  }[];
};

type ClassErrors = {
  name: string;
  import: string;
  github: string;
  description: string;
  extends: {
    name: string;
    import: string;
  };
  implements: {
    name: string;
    import: string;
  }[];
  examples: {
    name: string;
    value: string;
  }[];
  properties: {
    name: string;
    type: string;
    description: string;
  }[];
  methods: {
    name: string;
    description: string;
    github: string;
    static: string;
    examples: {
      name: string;
      value: string;
    }[];
    params: {
      name: string;
      type: string;
      description: string;
      default: string;
      required: string;
    }[];
    returns: {
      required: string;
      type: string;
      description: string;
    };
  }[];
  constructors: {
    description: string;
    github: string;
    params: {
      name: string;
      type: string;
      description: string;
      default: string;
      required: string;
    }[];
  }[];
};

@Component({
  selector: 'app-class-form',
  standalone: true,
  imports: [],
  templateUrl: './class-form.component.html',
  styleUrl: './class-form.component.css'
})
export class ClassFormComponent {
  @Output() classCreated = new EventEmitter<Class>();
  @Output() cancelUpdates = new EventEmitter();
  @Input() currentCls: Class = {
    name: '',
    import: '',
    github: '',
    description: '',
    extends: {
      name: '',
      import: '',
    },
    implements: [],
    examples: [],
    properties: [],
    methods: [],
    constructors: [],
  };
  @Input() newInstance = false;
  clsErrors: ClassErrors = {
    name: '',
    import: '',
    github: '',
    description: '',
    extends: {
      name: '',
      import: '',
    },
    implements: [],
    examples: [],
    properties: [],
    methods: [],
    constructors: [],
  };
  cls: Class = JSON.parse(JSON.stringify(this.currentCls));
}
