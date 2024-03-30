
class Activepage extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        this.props=this.getAttribute("x-props")
        console.log(this.props+' Activepage')
        function Getdata(data) {
      return data;
    }
    }
    connectedCallback(){
        this.render()
    }
    render(){
        let content= `
        <section class="todoapp" id="root">
    <header class="header" data-testid="header">
      <h1>todos</h1>
      <div class="input-container">
        <input
          class="new-todo"
          id="todo-input"
          type="text"
          data-testid="text-input"
          placeholder="What needs to be done?"
          value=""
        />
      </div>
    </header>
    <main class="main" data-testid="main">
      <div class="toggle-all-container">
        <input
          class="toggle-all"
          type="checkbox"
          data-testid="toggle-all"
        /><label class="toggle-all-label" for="toggle-all"
          >Toggle All Input</label
        >
      </div>
      <ul class="todo-list" data-testid="todo-list">
          <hub-item>  <hub-item/>
      </ul>
    </main>
    <hub-footer></hub-footer>
  </section>
        `;
        
        this.innerHTML=content
    }
}
customElements.define('hub-activepage', Activepage);
    
class Completedpage extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        this.props=this.getAttribute("x-props")
        console.log(this.props+' Completedpage')
        function Getdata(data) {
      return data;
    }
    }
    connectedCallback(){
        this.render()
    }
    render(){
        let content= `
        <section class="todoapp" id="root">
    <header class="header" data-testid="header">
      <h1>todos</h1>
      <div class="input-container">
        <input
          class="new-todo"
          id="todo-input"
          type="text"
          data-testid="text-input"
          placeholder="What needs to be done?"
          value=""
        />
      </div>
    </header>
    <main class="main" data-testid="main">
      <div class="toggle-all-container">
        <input
          class="toggle-all"
          type="checkbox"
          data-testid="toggle-all"
        /><label class="toggle-all-label" for="toggle-all"
          >Toggle All Input</label
        >
      </div>
      <ul class="todo-list" data-testid="todo-list">
        <hub-item>  <hub-item/>
      </ul>
    </main>
    <hub-footer></hub-footer>
  </section>
        `;
        
        this.innerHTML=content
    }
}
customElements.define('hub-completedpage', Completedpage);
    
class page extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        this.props=this.getAttribute("x-props")
        console.log(this.props+' page')
        function Getdata(data = []) {
    data.filter(elem => elem.id != id)
    let  todoInput=  document.getElementById('todo-input').value ?? ""
    if (todoInput.trim()) {
      
    }
    data.map((elem,index)=> {
      if(index===key){
        elem.name=todo.name
      }
    })
    console.log(item.id); list = [ ...list.filter((elem)=> elem.id!=1)]
    return data;
  }
    }
    connectedCallback(){
        this.render()
    }
    render(){
        let content= `
        <section class="todoapp" id="root">
  <div x-data="{
    list:   [{name:' Task 1', complete:false}, {name:'Task 2', complete:true}, {name:'Task 3', complete:false}] ,
    input:'',
    edit:''
  }">
    <header class="header" data-testid="header">
      <h1>todos</h1>
      <div class="input-container">
        <input class="new-todo" id="todo-input" type="text" data-testid="text-input"
          placeholder="What needs to be done?" value="" x-model="$input" @keyup.enter="
          console.log($input,value)
          if ($input.trim()) {
            $list =[...$list,{
              name:$input,
              complete: false
            }]
            $input=''
          }
          document.getElementById('todo-input').value=''
          " />
      </div>
    </header>
    <main class="main" >
      <div class="toggle-all-container">
        <input class="toggle-all" type="checkbox"  /><label class="toggle-all-label"
          for="toggle-all">Toggle All Input </label>
      </div>
      <ul x-for="todo, key in $list" class="todo-list" >
        <!-- <hub-item x-props="{data: todo}">  <hub-item /> -->
          <li class="" >
            <div class="view-key" @click="
            console.log('click edit')
            document.querySelector('.view-key').style.display='none'
            document.querySelector('.input-container-key').style.display='block'
            ">
              <input class="toggle" type="checkbox" :checked="todo.complete" />
              <label  x-text="todo.name"> </label>
              <button class="destroy" @click="
              $list = [ ...$list.filter((task, index) => index !== key)]
               console.log(key)" id=""></button>
            </div>
          </li>
          <div class="input-container-key" style="display: none;">
            <input value='' id="todo-input" type="text" x-model="$edit" class="edit" @keyup.enter="
            console.log($input)
             if ($edit.trim()) {
                $list =$list.map((elem,index)=> {
                if(index===key){
                  elem.name=$edit
                }
              })
              $edit=''
            }
            document.querySelector('.view-key').style.display='block'
            document.querySelector('.input-container-key').style.display='none'
            "  />
          </div>
        </ul>
    </main>
    <hub-footer></hub-footer>
  </div>
</section>
        `;
        
        this.innerHTML=content
    }
}
customElements.define('hub-page', page);
    
class footer extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        this.props=this.getAttribute("x-props")
        console.log(this.props+' footer')
        
    }
    connectedCallback(){
        this.render()
    }
    render(){
        let content= `
        <footer class="footer" data-testid="footer">
    <span class="todo-count">1 item left!</span>
    <ul class="filters" data-testid="footer-navigation">
      <li><a class="selected" href="#/">All</a></li>
      <li><a class="" href="#/active">Active</a></li>
      <li><a class="" href="#/completed">Completed</a></li>
    </ul>
    <button class="clear-completed" disabled="">Clear completed</button>
  </footer>
        `;
        
        this.innerHTML=content
    }
}
customElements.define('hub-footer', footer);
    
class item extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        this.props=this.getAttribute("x-props")
        console.log(this.props+' item')
        
    }
    connectedCallback(){
        this.render()
    }
    render(){
        let content= `
        <div x-data="{
  props:${this.props}
}">
    <li class=""  @ckick="
    ">
      <div class="view key">
        <input class="toggle" type="checkbox" :checked="props.todo.complete" />
        <label  x-text="props.data"> </label>
        <button class="destroy" @click="
        $list = [ ...$list.filter((task, index) => index !== key)]
         console.log(key)" id=""></button>
      </div>
    </li>
    <div class="input-container">
      <input value='' x-model="props.todo.name" id="edit-todo-input" class="edit"  />
    </div>
</div>
        `;
        
        this.innerHTML=content
    }
}
customElements.define('hub-item', item);
    
class todo extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        this.props=this.getAttribute("x-props")
        console.log(this.props+' todo')
        
    }
    connectedCallback(){
        this.render()
    }
    render(){
        let content= `
        <template x-data="{
    count: 1,
   props:${this.props}
}">

</template>
<span x-text="props"></span>
<li class="" data-testid="todo-item">
    <div class="view">
        <input
        class="toggle"
        type="checkbox"
        data-testid="todo-item-toggle"
        /><label data-testid="todo-item-label">label alpapie</label
        ><button class="destroy" data-testid="todo-item-button"></button>
    </div>
</li>
        `;
        
        this.innerHTML=content
    }
}
customElements.define('hub-todo', todo);
    

export default class Router extends HTMLElement {
    constructor() {
        super()

        this.routes = [
        
        {
            name: 'hub-activepage',
            hash: '/active',
            regExp: new RegExp(/^#\/active$/)
        }
                ,
        {
            name: 'hub-completedpage',
            hash: '/completed',
            regExp: new RegExp(/^#\/completed$/)
        }
                ,
        {
            name: 'hub-page',
            hash: '/',
            regExp: new RegExp(/^#\/$/)
        }
                
            // 404 Page not found
            ,{
                name: 'Hub-404',
                hash:'#/404',
                regExp: new RegExp(/^#\/404$/)
            },
        ]

        this.previousRoute = this.routes[0]

        /**
         * Listens to hash changes and forwards the new hash to route
         */
        this.hashChangeListener = event => {
            this.previousRoute = this.route(location.hash, false, event.newURL === event.oldURL)
        }
    }

    connectedCallback() {
        self.addEventListener('hashchange', this.hashChangeListener)
        this.previousRoute = this.route(this.routes.some(route => route.regExp.test(location.hash)) ? location.hash : '#/', true)
    }

    disconnectedCallback() {
        self.removeEventListener('hashchange', this.hashChangeListener)
    }

    route(hash, replace = false, isUrlEqual = true) {
        // escape on route call which is not set by hashchange event and trigger it here, if needed
        if (location.hash !== hash) {
            if (replace) location.replace(hash);
            return this.previousRoute
        }

        let route
        // find the correct route or do nothing
        if ((route = this.routes.find(route => route.regExp.test(hash)))) {
                if (this.shouldComponentRender(route.name, isUrlEqual)) {
                    // document.title = route.title
                    let component= document.createElement(route.name)
                    this.render(component)
                }
        } else {
            console.log("Not Found");
            self.location.hash = '#/404'
        }

        return route ? route : this.previousRoute
    }


    shouldComponentRender(name, isUrlEqual = true) {
        if (!this.children || !this.children.length) return true
        return !isUrlEqual || this.children[0].tagName !== name.toUpperCase()
    }

  
    render(component) {
        // clear previous content
        this.innerHTML = ''
        this.appendChild(component)
    }
}
customElements.define('hub-router', Router);

window.hubble = {
  init: true,
  cache: [],
  data: [],
  directives: {
    'x-text': (el, value) => {
      if (el.innerText !== `${value}`) {
        el.innerText = value;
      }
    },
    'x-bind': (el, value) => {
      const attrName = el.getAttributeNames().find(name => name.startsWith("x-bind:") || name.startsWith(":"));
      const actualAttrName = attrName.startsWith(":") ? attrName.substring(1) : attrName.substring(7);
      if (actualAttrName === 'checked') {
        if (value) el.setAttribute(actualAttrName, "");
      } else {
        el.setAttribute(actualAttrName, value);
      }
    },
    'x-model': (el, value, uuid) => {
      const key = el.getAttribute('x-model').replaceAll('$', '');
      if (el.type === 'checkbox') {
        el.checked = !!value;
      } else if (el.type === 'radio') {
        el.checked = (value === el.value);
      } else {
        if (el.value !== value) {
          el.value = value;
        }
      }

      if (hubble.init) {
        const updateData = (e) => {
          let newValue;
          if (el.type === 'checkbox') {
            newValue = el.checked;
          } else if (el.type === 'radio') {
            if (el.checked) {
              newValue = el.value;
            } else {
              return;
            }
          } else {
            newValue = e.target.value;
          }

          let parsedValue = typeof hubble.data[uuid][key] === 'number' ? parseFloat(newValue) : newValue;

          hubble.data[uuid][key] = parsedValue;
        };

        switch (el.tagName.toLowerCase()) {
          case "input":
            if (el.type === "checkbox" || el.type === "radio") {
              el.addEventListener("change", updateData);
            } else {
              el.addEventListener("input", updateData);
            }
            break;
          case "select":
          case "textarea":
            el.addEventListener("input", updateData);
            break;
        }
      }
    },
    'x-if': (el, value) => {
      const nextSibling = el.nextElementSibling;
      if (hubble.init) {
        const displayValue = el.style.getPropertyValue('display');
        if (displayValue !== '') {
          hubble.cache[el] = displayValue;
        }
      }
      if (!value) {
        el.style.display = 'none';
        if (nextSibling && nextSibling.getAttribute('x-else') !== null) {
          nextSibling.style.display = hubble.cache[nextSibling] || 'block';
        }
      } else {
        el.style.display = hubble.cache[el] || 'block';
        if (nextSibling && nextSibling.getAttribute('x-else') !== null) {
          if (hubble.init) {
            const displayValue = nextSibling.style.getPropertyValue('display');
            if (displayValue !== '') {
              hubble.cache[nextSibling] = displayValue;
            }
          }
          nextSibling.style.display = 'none';
        }
      }
    },
    "x-for": (el, value, uuid, key) => {
      let [item, array] = value.split(' in ');
      if (key === "$" && hubble.init) key = array
      if (key !== array) return false;

      let template;
      if (hubble.init) {
        template = el.innerHTML;
        el.setAttribute('x-temp', template);
      } else {
        template = el.getAttribute('x-temp');
      }

      const withIndex = item.split(', ');
      if (withIndex.length === 2) {
        item = item.split(', ')[0];
      }

      el.innerHTML = '';

      const _array = array.replaceAll('$', '');
      hubble.data[uuid][_array].forEach((_, index) => {
        const templateInstance = document.createElement('template');
        let html = template.replaceAll(new RegExp(item, 'g'), `${array}[${index}]`);
        if (withIndex.length === 2) {
          html = html.replaceAll(new RegExp(withIndex[1], 'g'), `${index}`);
        }
        templateInstance.innerHTML = html;
        const content = templateInstance.content.cloneNode(true);
        el.appendChild(content);
      });

      return true;
    }
  },
  start() {
    const dataElements = document.querySelectorAll('[x-data]');

    dataElements.forEach((element) => {
      const dataString = element.getAttribute('x-data');
      const dataObject = eval(`(${dataString})`);
      this.initializeComponent(element, dataObject);
    });
    this.init = false;
  },
  initializeComponent(container, data) {
    const uuid = createUUID();
    const proxyData = new Proxy(({ ...data, uuid }), {
      set: (target, key, value) => {
        target[key] = value;
        console.log(key);
        hubble.updateDOM(container, target.uuid, '$' + key);
        return true;
      }
    });
    hubble.data[uuid] = proxyData;
    this.updateDOM(container, uuid);
  },
  updateDOM(container, uuid, key = "$") {
    let shouldRemountEvent = false;
    this.walkDom(container, (el) => {
      for (const attr of el.attributes) {
        let { name, value } = attr;
        if (name.startsWith('x-bind') || name.startsWith(':')) {
          const _value = value.replaceAll('$', 'hubble.data[uuid].')
          this.directives['x-bind'](el, eval(_value), uuid)
        } else if (name.startsWith('x-for')) {
          shouldRemountEvent = this.directives['x-for'](el, value, uuid, key)
        } else if (Object.keys(this.directives).some((k) => name.startsWith(k))) {
          const _value = value.replaceAll('$', 'hubble.data[uuid].')
          this.directives[name](el, eval(_value), uuid)
        } else if ((this.init || shouldRemountEvent) && name.startsWith('@')) {
          const keyEventMatch = name.match(/^@(keydown|keyup)(\.[a-zA-Z]+)*$/);
          if (keyEventMatch) {
            const modifiers = keyEventMatch[2] ? keyEventMatch[2].split('.').slice(1) : [];
            const event = keyEventMatch[1];

            el.addEventListener(event, (e) => {
              const isKeyPressed = modifiers.every(modifier => e.key === `${modifier.charAt(0).toUpperCase() + modifier.slice(1).toLowerCase()}`);

              if (isKeyPressed) {
                const _value = el.getAttribute(name).replaceAll('$', 'hubble.data[uuid].')
                eval(_value);
              }
            });
          } else {
            const event = name.substring(1);
            const _value = value.replaceAll('$', 'hubble.data[uuid].')
            el.addEventListener(event, (e) => {
              eval(_value)
            })
          }
        }
      }
    })
  },
  walkDom(el, callback) {
    callback(el);

    el = el.firstElementChild;

    while (el) {
      this.walkDom(el, callback);
      el = el.nextElementSibling;
    }
  },
}

const createUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

window.hubble.start()
