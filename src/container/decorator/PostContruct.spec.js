import PostConstruct from "./PostConstruct";
import Secrets from "../Secrets";

describe("[ODIN]", function() {
  
  describe('@PostConstruct', () => {
    
    it('should store postConstruct method in class definition', () => {
      class PC1 { 
        @PostConstruct
        potato() { }
      }
      expect(Secrets.getPostContruct(PC1.prototype)).toBe('potato');
    });
    
    it('should throw error if try to define postConstruct method twice', () => {
      expect(() => {
        class PC2 { //eslint-disable-line
          @PostConstruct potato() { }
          @PostConstruct potato2() { }
        }
      }).toThrowError(`[ODIN] The class 'PC2' must constains no more than one PostConstruct method.`);
    });
    
  });
  
});